function toast(options) {
  if (typeof options !== 'object' && !Array.isArray(options))
    options = { text: options }
  if (options.text === undefined)
    throw Error('Missing required fields in options')
  if (options.delay === undefined)
    options.delay = 2500

  let div = $('<div>')
  div.addClass('toast')
  switch (options.type) {
    case 'primary':
      div.addClass('toast-primary')
      break
    case 'success':
      div.addClass('toast-success')
      break
    case 'warning':
      div.addClass('toast-warning')
      break
    case 'error':
      div.addClass('toast-error')
      break
  }
  
  if (options.close === true) {
    let close = $('<button class="btn btn-clear float-right">')
    close.on('click', (e) => {
      $(e.target).parent().remove()
    })
    div.append(close)
  }
  
  div.append(options.text)

  if (typeof options.delay === 'number') {
    setTimeout(() => {
      div.fadeOut(500)
    }, options.delay)
  }

  $('#toastArea').append(div)
}

function serverError() {
  toast({
    type: 'error',
    text: 'The request failed...'
  })
}

function networkError() {
  toast({
    type: 'error',
    text: 'A network error occurred...'
  })
}

function openModal(e) {
  let target = $(e.target)
  let modalName = target.data('modal')
  $('#' + modalName).addClass('active')

  window[`${modalName}Setup`](target)

  return false
}

function closeModal() {
  $('.modal').removeClass('active')
  return false
}

function attachEvents() {
  $('[data-modal]').on('click', openModal)
  $('[aria-label="Close"]').on('click', closeModal)

  if (typeof attachCustomEvents === 'function') {
    attachCustomEvents()
  }
}

$(function() {
  attachEvents()
})