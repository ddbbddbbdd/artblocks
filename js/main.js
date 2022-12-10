function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('show');
      }
    });
  }
  
  let options = {
    threshold: [0.1] };
  let optionsEx = {
      threshold: [0.01] };
  let observer = new IntersectionObserver(onEntry, options);
  let observerEx = new IntersectionObserver(onEntry, optionsEx);
  let elements = document.querySelectorAll('.animate');
  let exception = document.querySelectorAll('.animate-ex');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
  for (let ex of exception) {
    observerEx.observe(ex);
  }
