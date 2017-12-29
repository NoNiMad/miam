function save() {
  $.post({
    url: '/api/create',
    data: {
      type: 'document',
      db: miam.db,
      col: miam.col,
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
  
  let checkTimeout = null
  editor.getSession().on('change', () => {
    clearTimeout(checkTimeout)
    checkTimeout = setTimeout(() => {
      btnSave.prop('disabled', editor.getSession().getAnnotations().length > 0)
    }, 500)
  })
}