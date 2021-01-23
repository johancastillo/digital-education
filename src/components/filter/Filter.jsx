import "./Filter.css"

const Filter = () => {
    return (
        <div class="accordion" id="accordionExample" style={{ marginBottom: '20px' }}>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Rango de precio
                    </button>
                </h2>

                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body d-flex">
                        <div className="d-flex">
                            <span style={{ marginRight: '10px' }}>
                                De
                            </span>
                            <input style={{ width: '60px' }} type="number" />
                        </div>

                        <div className="d-flex" style={{ marginLeft: '10px' }}>
                            <span style={{ marginRight: '10px' }}>
                                a
                            </span>
                            <input style={{ width: '60px' }} type="number" />
                        </div>
                    </div>
                </div>

            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Valoraciones
                    </button>
                </h2>

                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label d-flex" for="flexRadioDefault1">
                                <div className="box-icons">
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                </div>
                                <span style={{ marginLeft: '10px' }}>5</span>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label d-flex" for="flexRadioDefault2">
                                <div className="box-icons">
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-half`}></span>
                                </div>
                                <span style={{ marginLeft: '10px' }}>4.5</span>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label d-flex" for="flexRadioDefault2">
                                <div className="box-icons">
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                </div>
                                <span style={{ marginLeft: '10px' }}>4</span>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label d-flex" for="flexRadioDefault2">
                                <div className="box-icons">
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-half`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                </div>
                                <span style={{ marginLeft: '10px' }}>3.5</span>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label d-flex" for="flexRadioDefault2">
                                <div className="box-icons">
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                </div>
                                <span style={{ marginLeft: '10px' }}>3</span>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label d-flex" for="flexRadioDefault2">
                                <div className="box-icons">
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-half`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                </div>
                                <span style={{ marginLeft: '10px' }}>2.5</span>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label d-flex" for="flexRadioDefault2">
                                <div className="box-icons">
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                </div>
                                <span style={{ marginLeft: '10px' }}>2</span>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label d-flex" for="flexRadioDefault2">
                                <div className="box-icons">
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-half`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                </div>
                                <span style={{ marginLeft: '10px' }}>1.5</span>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label d-flex" for="flexRadioDefault2">
                                <div className="box-icons">
                                    <span className={`stars icon-star-full`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                    <span className={`stars icon-star-void`}></span>
                                </div>
                                <span style={{ marginLeft: '10px' }}>1</span>
                            </label>
                        </div>

                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#teacher-filter" aria-expanded="true" aria-controls="collapseOne">
                        Profesor
                    </button>
                </h2>

                <div id="teacher-filter" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <input type="text" placeholder="Nombre del profesor" className="form-control" />
                    </div>
                </div>

            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#category-filter" aria-expanded="true" aria-controls="collapseOne">
                        Categoría
                    </button>
                </h2>

                <div id="category-filter" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Cursos
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                            <label class="form-check-label" for="defaultCheck2">
                                Talleres
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                            <label class="form-check-label" for="defaultCheck2">
                                Especialidades
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                            <label class="form-check-label" for="defaultCheck2">
                                E-Books
                            </label>
                        </div>
                    </div>
                </div>

            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Etiquetas
                    </button>
                </h2>

                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Cursos
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                            <label class="form-check-label" for="defaultCheck2">
                                Talleres
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                            <label class="form-check-label" for="defaultCheck2">
                                Especialidades
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                            <label class="form-check-label" for="defaultCheck2">
                                E-Books
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#material-filter" aria-expanded="true" aria-controls="collapseOne">
                        Material
                    </button>
                </h2>

                <div id="material-filter" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Cursos
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                            <label class="form-check-label" for="defaultCheck2">
                                Talleres
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                            <label class="form-check-label" for="defaultCheck2">
                                Especialidades
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                            <label class="form-check-label" for="defaultCheck2">
                                E-Books
                            </label>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Filter
