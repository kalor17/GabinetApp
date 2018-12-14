using System;

namespace GabinetAppBack.API.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public string Title { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}