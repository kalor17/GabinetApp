using GabinetAppBack.API.Models;
using Microsoft.EntityFrameworkCore;

namespace GabinetAppBack.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){ }
        
        public DbSet<User> Users { get; set; }
        public DbSet<Visit> Visits { get; set; }
    }
}