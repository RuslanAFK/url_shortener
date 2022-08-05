using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class UrlsController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        
        


        // GET: Urls
        [AllowAnonymous]
        public ActionResult Index()
        {
            return Json(db.urls.ToList(), JsonRequestBehavior.AllowGet);
        }

        // GET: Urls/Details/5
        public ActionResult Details(int? id)
        {
            /*if (!User.Identity.IsAuthenticated)
            {
                return Json(new { Success = false, Data = "You don't have enough rights." });
            }*/
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Url url = db.urls.Find(id);
            if (url == null)
            {
                return HttpNotFound();
            }
            return Json(new { Success = true, Data = url }, JsonRequestBehavior.AllowGet);
        }

        // GET: Urls/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Urls/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public ActionResult Create([Bind(Include = "Id,FullUrl,ShortUrl,CreatedBy,CreatedDate")] Url url)
        {
            if (ModelState.IsValid)
            {
                var foundDuplicate = db.urls.Any(r => r.FullUrl == url.FullUrl
                    || r.ShortUrl == url.ShortUrl);
                if (foundDuplicate)
                {
                    return Json("The url is taken!");
                }
                db.urls.Add(url);
                db.SaveChanges();
                return Json("Good!");
            }

            return Json("Error!");
        }

        

       
        // POST: Urls/Delete/5
        [HttpDelete]
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Url url = db.urls.Find(id);
            var creator = url.CreatedBy;
            /*if (!User.IsInRole("Admin") && !(User.Identity.Name == creator))
            {
                return Json("You don't have enough rights.");
            }*/
            if (url == null)
            {
                return HttpNotFound();
            }
            db.urls.Remove(url);
            db.SaveChanges();
            return Json("Deleted!");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
