const useShareLink = () => {
  const shareLink = (link) => {
    var new_window = window.open(link, "", "height=450, width=700")

    if (window.focus) {
      new_window.focus()
    }
  }

  return {
    shareLink,
  }
}

export default useShareLink
