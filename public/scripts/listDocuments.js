function modDeleteSetup(target) {
  let row = target.parents('tr')
  let doc = row.data('doc')

  $('#modDelete .btn-error').on('click', (e) => {
    closeModal()
    $.get({
      url: `/api/drop?type=document&db=${miam.db}&col=${miam.col}&doc=${doc}`,
      success(data) {
        if (data.error === true)
          return serverError()

        location.replace(`/view/${miam.db}/${miam.col}`)
      },
      error: networkError
    })
  })
}

function duplicate(e) {
  let row = $(e.target).parents('tr')
  let doc = row.data('doc')

  $.get({
    url: `/api/duplicate?type=document&db=${miam.db}&col=${miam.col}&doc=${doc}`,
    success(data) {
      if (data.error === true)
        return serverError()

      location.replace(`/view/${miam.db}/${miam.col}`)
    },
    error: networkError
  })
}

function attachCustomEvents() {
  $('.duplicate').on('click', duplicate)
}