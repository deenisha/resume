var bio = {
	"name": "Deenisha Doodnath",
	"role": "Front-End Web Developer",
	"contacts": {
		"email": "deenisha.doodnath@gmail.com",
		"github": "deenisha",
		"twitter": "@deenishad",
		"location": "Toronto, Ontario, Canada"
	},
	"picture": "images/me.png",
	"welcomeMessage": "Toronto based designer who creates clean and bold user experiences.",
	"skills": ["HTML", "CSS", "Javascript", "UI Design",]
};

var work = {
	"jobs": [
		{
			"employer": "Wall2Wall Media",
			"title": "Implementation Consultant",
			"location": "Toronto, Ontario, Canada",
			"datesWorked": "November 2014 - Present",
			"description": "Design and Implement websites and online advertising solutions for real estate clients in Canada."
		},
		{
			"employer": "Wall2Wall Media",
			"title": "Display Artist",
			"location": "Toronto, Ontario, Canada",
			"datesWorked": "June 2012 - November 2014",
			"description": "Production for Resale Homes GTA, Resale Homes Hamilton, " +
			"Commercial Investor and Realty Link publications. Web Design for Wall2Wall Media, " +
			"Home Decor & Renovations, Ayre & Oxford and other realty properties. "
		},
		{
			"employer": "Denicreative",
			"title": "Freelance Web / Graphic Designer",
			"location": "Toronto, Ontario, Canada",
			"datesWorked": "September 2009 - Present",
			"description": "Bold and modern sense of design where ideas emerge. Strong passion for creating a " +
			"diverse visual experience across various mediums that speaks to the target audience and expresses the client brand equity."
		},
		{
			"employer": "Elite Music Academy",
			"title": "Web / Graphic Designer",
			"location": "Toronto, Ontario, Canada",
			"datesWorked": "September 2009 - January 2012",
			"description": "Create and execute promotional material for the company’s various programs, services, " +
			"camps, websites and social networks in various aspects of marketing in a small team setting. This includes: " +
			"posters, brochures, fliers, concert tickets, gift certificates, video editing for summer camps, " +
			"event banner displays, web design & maintenance, outdoor signage, outdoor advertisements etc."
		},
		{
			"employer": "BBDO Toronto",
			"title": "Design Internship - Mac Artist",
			"location": "Toronto, Ontario, Canada",
			"datesWorked": "October 2008 - December 2008",
			"description": "Mac Artist in studio responsible for production within the company's branding standards while " +
			"communicating with other partners. Accounts include: Chrysler, Mercedes-Benz, Tv Guide, Swiss " +
			"Chalet and United Way."
		},
		{
			"employer": "Junior Art Director",
			"title": "StudioLab of GBC",
			"location": "Toronto, Ontario, Canada",
			"datesWorked": "September 2007 - April 2008",
			"description": "Working in a creative team on projects ranging from print, identity, multimedia and web. Clients " +
			"include: Eva's Print Shop (Eva's Phoenix), Portrait Gallery of Canada, Studio Lab of George Brown College and Sourz by Publicis"
		},
		{
			"employer": "Event Staff / Video Editor",
			"title": "Student Association of George Brown College",
			"location": "Toronto, Ontario, Canada",
			"datesWorked": "August 2007 - April 2008",
			"description": "Promote and operate school events, pub nights, event games and boat cruises. Edit previous and " +
			"current school event footage. Design advertising material for school events (graphics, fliers etc)."
		}
	]
};

var education = {
	"schools": [
		{ "name": "George Brown College",
			"datesAttended": "2005 - 2008",
			"location": "Toronto, Ontario, Canada",
			"degree": "Graphic Design Advanced Diploma",
			"major": "Advertising",
			"minor": "Communication",
			"url": "www.georgebrown.ca"
		}		
	],
	"onlineCourses": [
		{ "school": "University of New Mexico",
			"title": "Web Application Architectures",
			"completed": "November 2014",
			"url": "https://www.coursera.org/maestro/api/certificate/get_certificate?verify-code=GKCAXVWDGX"
		},
		{ "school": "Treehouse",
			"title": "Sass Basics",
			"completed": "November 2014",
			"url": "http://teamtreehouse.com/library/sass-basics"
		},
		{ "school": "Udacity",
			"title": "Javascript Basics",
			"completed": "February 2015",
			"url": "https://www.udacity.com/course/ud804"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "NHC Mediakit Website",
			"datesWorked": "August 2014 - September 2014",
			"description": "Created an website to market the New Home and Condo Mediakits for 2014",
			"images": ["images/nhc.jpg"],
			"url": "http://mediakit.newhomeandcondoguide.ca/"
		},
		{
			"title": "Minion 2048",
			"datesWorked": "November 2014",
			"description": "Created a minion version of the popular game 2048",
			"images": ["images/minion.jpg"],
			"url": "http://deenisha.github.io/"
		},
		{
			"title": "Dominion Windows",
			"datesWorked": "March 2013",
			"description": "Magazine advertisement for ad in The GTA Condo Builders Annual 2014 Issue (Page 75).",
			"images": ["images/img2.jpg"],
			"url": "http://issuu.com/wall2wall/docs/cba2014"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();

/**
 * Skills Chart
 */
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		},
		series: [{
				name: 'Javascript',
				color: 'rgba(223, 83, 83, .5)',
				data: [[2015, 1],[2014, 2], [2013, 2]]
			},
			{
				name: 'SQL',
				color: 'rgba(119, 152, 80, .5)',
				data: [[2014, 2],[2013, 2]]
			},
			{
				name: 'HTML/CSS',
				color: 'rgba(153, 51, 0, .5)',
				data: [[2015, 2],[2014, 12], [2013, 12], [2012, 6], [2011, 6]]
			},
			{
				name: 'Web Development',
				color: 'rgba(0, 153, 102, .5)',
				data: [[2015, 2],[2014, 8],[2013, 7]]
			},
			{
				name: 'Ruby',
				color: 'rgba(0, 102, 51, .5)',
				data: [[2014, 3]]
			}]
	});
});


$("#mapDiv").append(googleMap);


