$(function()
{
  var selectedStartDate,
      selectedDate,
      nextDateOfSelectedDate,
      dayInSelectedStartDate ;

  $('#start-datetimepicker').dateRangePicker(
  {
  	separator : ' to ',
    time: {
		    enabled: true
	  },
    singleMonth: true,
    singleDate:true,
    startDate: false,
	  endDate: false,
    format: 'DD.MM.YYYY HH:mm',
    autoClose: false,
    tableId:'start-date-table',
  	// getValue: function()
  	// {
  	// 	if ($('#start-date-range').val() && $('#end-date-range').val() )
  	// 		return $('#start-date-range').val() + ' to ' + $('#end-date-range').val();
  	// 	else
  	// 		return '';
  	// },
  	setValue: function(s,s1,s2)
  	{
  		$('#start-date-range').val(s1);
  		//$('#end-date-range').val(s2);
  	}
  }).bind('datepicker-first-date-selected', function(event, obj) {

    	/* This event will be triggered when first date is selected */
      event.stopPropagation();
      if (!$('#start-date-range').val()){
        //closeStartDatePicker();
        selectedDate = obj.date1;
        dayInSelectedStartDate = selectedDate.getDate();
        selectedStartDate = getFormattedDate(selectedDate);
        selectedTime = getFormatedTime(selectedDate);
        $('#start-date-range').val(selectedStartDate + " " + selectedTime);

        nextDateOfSelectedDate = new Date(selectedDate.setDate(selectedDate.getDate() + 5));

        //$('#end-datetimepicker').data('dateRangePicker').setDateRange(selectedDate, nextDateOfSelectedDate);

        //openStartDatePicker();
      }

      // if ($('#start-date-range').val() && $('#end-date-range').val()) {
      //   closeStartDatePicker();
      //   console.log(obj.date1)
      //   //$('#start-date-range').val(getFormattedDate(obj.date1));
      // }

  });


  function getFormattedDate(todayTime) {
      var month = todayTime.getMonth() + 1;
      var day = todayTime.getDate();
      var year = todayTime.getFullYear();
      return day + "." + month + "." + year;
  };

  function getFormatedTime (todayTime) {
    var hours = todayTime.getHours();
    var minutes = todayTime.getMinutes();
    return   hours + ":" + minutes;
  };

  function closeStartDatePicker() {
    $('#start-datetimepicker').data('dateRangePicker').close();
  };

  function openStartDatePicker() {
    $('#start-datetimepicker').data('dateRangePicker').open();
  };


  function closeEndDatePicker() {
    $('#end-datetimepicker').data('dateRangePicker').close();
  };

  function openEndDatePicker() {
    $('#end-datetimepicker').data('dateRangePicker').open();
  };





  $('#end-datetimepicker').dateRangePicker(
  {
    time: {
		    enabled: true
	  },
    singleMonth: true,
  //  singleDate:true,
    //startDate: selectedStartDate,
	  endDate: false,
    format: 'DD.MM.YYYY HH:mm',
    autoClose: false,
    endDateField:true,
    tableId:'end-date-table',
  	// getValue: function()
  	// {
  	// 	if ($('#start-date-range').val() && $('#end-date-range').val() )
  	// 		return $('#start-date-range').val() + ' to ' + $('#end-date-range').val();
  	// 	else
  	// 		return '';
  	// },
  	setValue: function(s,s1,s2)
  	{
  		$('#end-date-range').val(s2);
  		//$('#end-date-range').val(s2);
  	}
  })
  .bind('datepicker-opened',function()
    {
          var today = new Date(),
              element = $('#end-date-table').find('td div').filter(function() {
                //console.log(dayInSelectedStartDate);
                return $(this).text() == new String(dayInSelectedStartDate)
              });
          element[0].click();
  });

});
