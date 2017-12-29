function modDeleteSetup(target) {
  $('#modDelete .btn-error').on('click', (e) => {
    closeModal()
    $.get({
      url: `/api/drop?type=document&db=${miam.db}&col=${miam.col}&doc=${miam.id}`,
      success(data) {
        if (data.error === true)
          return serverError()

        location.replace(`/view/${miam.db}/${miam.col}`)
      },
      error: networkError
    })
  })
}

function save() {
  $.post({
    url: '/api/update',
    data: {
      type: 'document',
      db: miam.db,
      col: miam.col,
      id: miam.id,
      doc: JSON.parse(editor.getValue())
    },
    headers: { 'csrf-token': miam.csrf },
    success(data) {
      if (data.error === true)
        return serverError()

      location.replace(`/view/${miam.db}/${miam.col}`)
    },
    error: networkError
  })
}

let editor = null

function attachCustomEvents() {
  let btnSave = $('.btn-success')
  btnSave.on('click', save)

  editor = ace.edit('editor')
  editor.setTheme('ace/theme/iplastic')
  editor.getSession().setMode('ace/mode/json')
  editor.getSession().setTabSize(2)
  editor.getSession().setUseSoftTabs(true)
  editor.setValue(JSON.stringify(miam.doc, null, '  '))

  let checkTimeout = null
  editor.getSession().on('change', () => {
    clearTimeout(checkTimeout)
    checkTimeout = setTimeout(() => {
      btnSave.prop('disabled', editor.getSession().getAnnotations().length > 0)
    }, 500)
  })
}