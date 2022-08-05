using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Url
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(500)]
        [Required]
        public string FullUrl { get; set; }
        [MaxLength(500)]
        [Required]
        public string ShortUrl { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
    }
}