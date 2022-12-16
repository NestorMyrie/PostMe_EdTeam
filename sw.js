

self.addEventListener("install",(event) => {
  console.info('[sv] install ...');
})
self.addEventListener("activate",(event) => {
    console.info('[sv] activate ...');
  })

  self.addEventListener( "fetch", event => {
    console.log('WORKER: Fetching');
  });

  