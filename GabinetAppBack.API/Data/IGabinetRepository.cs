using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GabinetAppBack.API.Models;

namespace GabinetAppBack.API.Data
{
    public interface IGabinetRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<bool> FreeTerm(DateTime startDate);
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
         Task<Visit> GetVisit(int id);
         Task<IEnumerable<Visit>> GetVisits();
         Task<Reservation> GetReservation(int id);
         Task<IEnumerable<Reservation>> GetReservations();

    }
}