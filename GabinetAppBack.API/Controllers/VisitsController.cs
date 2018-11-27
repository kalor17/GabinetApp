using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using GabinetAppBack.API.Data;
using GabinetAppBack.API.Dtos;
using GabinetAppBack.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GabinetAppBack.API.Controllers
{
    [Authorize]
    [Route("api/users/{userId}/visits")]
    [ApiController]
    public class VisitsController : ControllerBase
    {
        private readonly IGabinetRepository _repo;
        private readonly IMapper _mapper;
        public VisitsController(IGabinetRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;

        }

        [HttpGet("{id}", Name = "GetVisit")]
        public async Task<IActionResult> GetVisit(int id)
        {
            var visitFromRepo = await _repo.GetVisit(id);
            
            var visit = _mapper.Map<VisitForDetailedDto>(visitFromRepo);

            return Ok(visit);

        }

        [HttpGet]
        public async Task<IActionResult> GetVisits()
        {
            var visitsFromRepo = await _repo.GetVisits();
            
            var visits = _mapper.Map<IEnumerable<VisitForDetailedDto>>(visitsFromRepo);

            return Ok(visits);

        }

        [HttpPost]
        public async Task<IActionResult> AddVisit(int userId, VisitForAddDto visitForAddDto)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var userFromRepo = await _repo.GetUser(userId);

            var visit = _mapper.Map<Visit>(visitForAddDto);

            userFromRepo.Visits.Add(visit);
            userFromRepo.LastVisit = visit.VisitDate;

            

            if(await _repo.SaveAll())
            {
                var visitToReturn = _mapper.Map<VisitForDetailedDto>(visit);
                return CreatedAtRoute("GetVisit",new {id = visit.Id}, visitToReturn);
            }

            return BadRequest("Nie można dodać wizyty");
        }
    }
}