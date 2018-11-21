using System;

namespace GabinetAppBack.API.Models
{
    public class Visit
    {
        public int Id { get; set; }
        public int Tooth { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public DateTime VisitDate { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}