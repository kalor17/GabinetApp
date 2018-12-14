using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GabinetAppBack.API.Models;
using Microsoft.EntityFrameworkCore;

namespace GabinetAppBack.API.Data
{
    public class GabinetRepository : IGabinetRepository
    {
        private readonly DataContext _context;
        public GabinetRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(v => v.Visits).Include(r => r.Reservations).FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.Include(v => v.Visits).Include(r => r.Reservations).ToListAsync();

            return users;
        }

        public async Task<IEnumerable<Visit>> GetVisits()
        {
            var visits = await _context.Visits.ToListAsync();

            return visits;
        }

        public async Task<Visit> GetVisit(int id)
        {
            var visit = await _context.Visits.FirstOrDefaultAsync(v => v.Id == id);

            return visit;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> FreeTerm(DateTime startDate)
        {
            var reservation = await _context.Reservations.FirstOrDefaultAsync(d => d.Start == startDate);

            if(reservation != null)
                return false;
            
            return true;
        }

        public async Task<Reservation> GetReservation(int id)
        {
            var reservation = await _context.Reservations.FirstOrDefaultAsync(r => r.Id == id);

            return reservation;
        }

        public async Task<IEnumerable<Reservation>> GetReservations()
        {
            var reservations = await _context.Reservations.ToListAsync();

            return reservations;
        }

        public async Task<IEnumerable<Reservation>> GetUserReservations(int id)
        {
            var user = await _context.Users.Include(v => v.Visits).Include(r => r.Reservations).FirstOrDefaultAsync(u => u.Id == id);
            List<Reservation> reservations = new List<Reservation>();
            reservations = user.Reservations.ToList();

            return reservations;
        }

        public async Task<bool> GoodTerm(DateTime startDate)
        {
            var reservations = await _context.Reservations.ToListAsync();
            if(startDate < DateTime.Now || startDate.Hour < 9 || startDate.Hour > 17 || startDate.DayOfWeek == DayOfWeek.Saturday || startDate.DayOfWeek == DayOfWeek.Sunday)
                return false;
            return true;
        }
    }
}