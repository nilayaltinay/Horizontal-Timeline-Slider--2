const data = [
	{ dateLabel: 'January 2017', title: 'Enrolment Deadline' },
	{ dateLabel: 'February 2017', title: 'Start Date' },
	{ dateLabel: 'March 2017', title: 'Subject Selection Closes' },
	{ dateLabel: 'April 2017', title: 'Census Date' },
	{ dateLabel: 'May 2017', title: 'Academic Withdrawal' },
	{ dateLabel: 'June 2017', title: 'Withdrawal Deadline' },
	{ dateLabel: 'July 2017', title: 'Finish Date' },
	{ dateLabel: 'August 2017', title: 'Withdrawal Deadline' },
  ];
  
  
  new Vue({
	el: '#app', 
	data: {
	  steps: data,
	},
	mounted() {
	  var swiper = new Swiper('.swiper-container', {
  
		slidesPerView: 3,
		grabCursor: true,
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
	  });    
	}
  });