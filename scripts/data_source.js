FESTIVUS = [
	{
		year: 2014,
		festivals: [
			{
				date: 'August-September',
				name: 'Vancouver Fringe Festival',
				title: 'Volunteer Usher / Raffle Ticket Seller / Special Events'
			},
			{
				date: 'July',
				name: 'Vancouver Folk Music Festival',
				title: 'Volunteer, Gate Security'				
			},
			{
				date: 'June-July',
				name: 'Vancouver Coastal Jazz Festival',
				title: 'Volunteer, Venue Box Office'
			}
		]
	},
	
	{
		year: 2011,
		festivals: [
			
			{
				date: 'May',
				name: 'New Zealand International Comedy Festival 2011, Wellington',
				title: 'Venue Usher, Garden Club'
			},
			{
				date: 'March',
				name: 'Dunedin Fringe Festival 2011, Dunedin, New Zealand',
				title: 'Volunteer, Promotion'
			},
		]
	}
];

JORBS = [
	{
		company: "University of British Columbia, Faculty of Medicine, Dean’s Office",
		date: "April 2014 – present",
		location: "Vancouver",
		title: "Executive Assistant to the Senior Director of Finance",
		description: "Reporting to the Senior Director of Finance, the Senior Administrative Assistant provides confidential, tactical and executive level administrative support to the Senior Director of Finance, and the portfolio's management team.",
		tasks: [
			"Acting as a primary scheduling resource for the Senior Director by determining/managing schedules and availability; prioritizing/actioning meeting requests, and by making, confirming and ensuring appropriate meeting arrangements and documentation are in order, and required travel arrangements are secured where appropriate.",
			"Working with the Senior Director to carry out strategic project work as and when required.",
			"Researching, planning, implementing and facilitating projects as assigned on an adhoc basis."
		]
	},
	{
		company: "University of British Columbia, Payment and Procurement Services",
		date: "January – March 2014",
		location: "Vancouver",
		title: "Senior Administrative Assistant",
		description: "Reporting to the Director, the Senior Administrative Assistant provides confidential, tactical and executive level administrative support to the PPS Director, Senior HR Coordinator and the portfolio's senior management team.",
		tasks: [
			"Acting as a primary scheduling resource for the Director by determining/managing schedules and availability; prioritizing/actioning meeting requests, and by making, confirming and ensuring appropriate meeting arrangements and documentation are in order, and required travel arrangements are secured where appropriate.",
			"Researching, planning, implementing and facilitating projects as assigned on an adhoc basis."
		]
	}
];

!(function(){
  
  source = $('#jobs').html();
  tmpl = Handlebars.compile(source);
  html = tmpl(JORBS);
  $('.experience').append(html);

  source = $('#festivals').html();
  tmpl = Handlebars.compile(source);
  html = tmpl(FESTIVUS);
  $('.festivals').append(html);

  $('.section:even').addClass('even');
  
  setTimeout(function(){
    if(confirm("Would you like to print?")){
      window.print();
    }
  }, 5000)
  
});