using Microsoft.AspNetCore.Mvc;

namespace GetImobiliarios.API.Controllers
{
    [ApiController]
    [Route("/")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { message = "Welcome to GetImobiliarios API" });
        }
    }
}