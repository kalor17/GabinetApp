using System;
using System.ComponentModel.DataAnnotations;

namespace GabinetAppBack.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(10, MinimumLength=5, ErrorMessage = "Hasło musi zawierać od 5 do 10 znaków")]
        public string Password { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string Address { get; set; }
        public string Role { get; set; }

        public UserForRegisterDto()
        {
            this.Role = "patient";
        }
    }
}