var lightboxDescription = GLightbox({
    selector: 'glightbox'
  });
  
  
  function call(id) {


    const items = Array.from(document.getElementsByClassName("filter"));
    Array.from(document.getElementsByClassName("filter-button")).map(function (item, index) {
        item.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
    items.map(function (item, index) {
      console.log(item);
      
      //item.classList.add('active');

      if (id === "all") {
        item.classList.remove('d-none');
        item.classList.add('fadeIn','glightbox');
        setTimeout(clean,500);
      } else {
        const check = items[index].classList.contains(id);
        console.log(check);
  
        if (check) {
          item.classList.remove('d-none');
          item.classList.add('fadeIn','glightbox');
        } else {
          item.classList.add('d-none');
          item.classList.remove('fadeIn','glightbox');
        }
      }
    })
  }
  
  function clean() {
    const items = Array.from(document.getElementsByClassName("filter"));
    items.map(function (item, index) {
      item.classList.remove('fadeIn');
    })
  }
  