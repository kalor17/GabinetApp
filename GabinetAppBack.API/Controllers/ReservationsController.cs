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
    [Route("api/users/{userId}/reservations")]
    [ApiController]
    public class ReservationsController : ControllerBase
    {
        private readonly IGabinetRepository _repo;
        private readonly IMapper _mapper;
        public ReservationsController(IGabinetRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;

        }

        [HttpGet("{id}", Name = "GetReservation")]
        public async Task<IActionResult> GetReservation(int id)
        {
            var reservationFromRepo = await _repo.GetReservation(id);
            
            var reservation = _mapper.Map<ReservationForDetailedDto>(reservationFromRepo);

            return Ok(reservation);

        }

        [HttpGet("all", Name = "GetReservations")]
        public async Task<IActionResult> GetReservations()
        {
            var reservationsFromRepo = await _repo.GetReservations();
            
            var reservations = _mapper.Map<IEnumerable<ReservationForDetailedDto>>(reservationsFromRepo);

            return Ok(reservations);

        }

        [HttpGet]
        public async Task<IActionResult> GetUserReservations(int userId)
        {
            var reservationsFromRepo = await _repo.GetUserReservations(userId);
            
            var reservations = _mapper.Map<IEnumerable<ReservationForDetailedDto>>(reservationsFromRepo);

            return Ok(reservations);

        }

        [HttpPost]
        public async Task<IActionResult> AddReservation(int userId, ReservationForAddDto reservationForAddDto)
        {
             if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var userFromRepo = await _repo.GetUser(userId);

            reservationForAddDto.AddEndDate();
            var reservation = _mapper.Map<Reservation>(reservationForAddDto);

            if(await _repo.FreeTerm(reservation.Start) == false)
                return BadRequest("Wybrany termin jest zarezerwowany");

            userFromRepo.Reservations.Add(reservation);


            if(await _repo.SaveAll())
            {
                var reservationToReturn = _mapper.Map<ReservationForDetailedDto>(reservation);
                return CreatedAtRoute("GetReservation",new {id = reservation.Id}, reservationToReturn);
            }

            return BadRequest("Nie można dodać wizyty");
        }
    }
}