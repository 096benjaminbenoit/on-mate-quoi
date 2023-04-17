const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Tu ne sais pas quoi mater ?
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Nous te présentons les 20 films les plus populaires du moment! <br/>
              Pas de doute, avec ça tu vas trouver ton bonheur !
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://www.themoviedb.org/t/p/w440_and_h660_face/xUvSeFhdsJbKFOaHnB9TeTZpJKs.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.themoviedb.org/t/p/w440_and_h660_face/ahMxyHMSJXingQr4yJBMzMU9k42.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.themoviedb.org/t/p/w440_and_h660_face/pR858ihc6Ls9xohpdRJVjV787ml.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.themoviedb.org/t/p/w440_and_h660_face/hYeB9GpFaT7ysabBoGG5rbo9mF4.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.themoviedb.org/t/p/w440_and_h660_face/fcBXkQygo8h2PK0KnxOxzkbD9p.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.themoviedb.org/t/p/w440_and_h660_face/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.themoviedb.org/t/p/w440_and_h660_face/jYxRG1aeVKoLG48Jlka0QMpGzsb.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                Let's go !
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero