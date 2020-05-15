using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            List<Employee> employees = new List<Employee>
            {
                new Employee { Id = 1, Name = "Sarathlal Saseendran", Company = "Orion Business Innovations", City = "Kochi" },
                new Employee { Id = 2, Name = "Anil Soman", Company = "Cognizant", City = "Bangalare" }
            };
            return employees;
        }
    }
}