function modDeleteSetup(target) {
  let row = target.parents('tr')
  let db = row.data('db')

  $('#modDelete .btn-error').on('click', (e) => {
    closeModal()
    $.get({
      url: `/api/drop?type=database&db=${db}`,
      success(data) {
        if (data.error === true)
          return serverError()
        
        location.replace('/')
      },
      error: networkError
    })
  })
}

function attachCustomEvents() {
  $('#newDatabase input').on('keypress', (e) => {
    if(e.which == 13)
      location.replace('/view/' + $('#newDatabase input').val())
  })
  
  $("#newDatabase button").on('click', () => {
    location.replace('/view/' + $('#newDatabase input').val())
  })
}