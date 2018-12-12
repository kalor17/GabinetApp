using System;

namespace GabinetAppBack.API.Dtos
{
    public class ReservationForAddDto
    {
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public string Name { get; set; }

        public void AddEndDate()
        {
            End = Start.AddHours(1);
        }
    }
}