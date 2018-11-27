using System.Collections.Generic;
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
            var user = await _context.Users.Include(v => v.Visits).FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.Include(v => v.Visits).ToListAsync();

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
    }
}