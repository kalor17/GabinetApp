using System;

namespace GabinetAppBack.API.Dtos
{
    public class VisitForAddDto
    {
        //public int Id { get; set; }
        public int Tooth { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public DateTime VisitDate { get; set; }

        public VisitForAddDto()
        {
            VisitDate = DateTime.Now;
        }
    }
}