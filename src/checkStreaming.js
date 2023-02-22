checkStreaming() {
    async verificar(){
    //Endpoint para disponibilidad
    let url = "https://streaming-availability.p.rapidapi.com/get/basic";
    const options = {
      params: {
        country: "cl",
        tmdb_id: `movie/${this.id}`,
        output_language: "es",
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
      },
    };

    await axios
      .get(url, options)
      .then((response) => (this.posts = response.data));
    console.log(this.posts);
    }
  }