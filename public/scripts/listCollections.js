function modRenameSetup(target) {
  let row = target.parents('tr')
  let col = row.data('col')
  let input = $('#modRename input:eq(0)')
  input.val(col)

  $('#modRename .btn-primary').on('click', e => {
    closeModal()
    let newCol = input.val()

    $.post({
      url: '/api/update',
      data: {
        type: 'collection',
        db: miam.db,
        col: col,
        newCol: newCol
      },
      headers: { 'csrf-token': miam.csrf },
      success(data) {
        if (data.error === true)
          return serverError()

        location.replace(`/view/${miam.db}`)
      },
      error: networkError
    })
  })
}

function modDeleteSetup(target) {
  let row = target.parents('tr')
  let col = row.data('col')

  $('#modDelete .btn-error').on('click', (e) => {
    closeModal()
    $.get({
      url: `/api/drop?type=collection&db=${miam.db}&col=${col}`,
      success(data) {
        if (data.error === true)
          return serverError()

        location.replace(`/view/${miam.db}`)
      },
      error: networkError
    })
  })
}

function attachCustomEvents() {

}