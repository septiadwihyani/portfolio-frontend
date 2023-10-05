function toggleDetail(e){
    const target = $(e.target)

    const item = $(target).parents(".btn-skill-list-item")
    const detail = $(item).children(".btn-detail")

    $(detail).slideToggle()

    // console.log($(item).children(".btn-detail"))
}