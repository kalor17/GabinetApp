using System;

namespace GabinetAppBack.API.Dtos
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime LastVisit { get; set; }
        public string Address { get; set; }

        
    }
}