using AutoMapper;
using GabinetAppBack.API.Dtos;
using GabinetAppBack.API.Models;

namespace GabinetAppBack.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
            CreateMap<User, UserForDetailedDto>();
            CreateMap<UserForUpdateDto,User>();
            CreateMap<UserForRegisterDto,User>();
        }
    }
}