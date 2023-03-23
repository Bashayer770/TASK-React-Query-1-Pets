import React, { useState } from "react";
import PetItem from "./PetItem";
import list from "../utils/api/pets";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

function PetsList({ petsData }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [pets, setPets] = useState(petsData);
  const res = useQuery(["pets"], () => list());

  const handleAdopt = (petId) =>
    setPets(pets.filter((pet) => pet.id !== petId));

  const petList = res.data?.data
    .filter(
      (pet) =>
        pet.name.toLowerCase().includes(query.toLowerCase()) &&
        pet.type.includes(type)
    )
    .map((pet) => <PetItem key={pet.id} pet={pet} />);
  return (
    <section id="doctors" class="doctor-section pt-140">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-5 col-xl-6 col-lg-7">
            <div class="section-title text-center mb-30">
              <h1 class="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div class="input-group rounded PetButton">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(e) => setQuery(e.target.value)}
                  style={{
                    width: "100%",
                  }}
                />
                <NavLink to="/AddPet">
                  <button>Add pet</button>
                </NavLink>
              </div>
              <br />
              Type:
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}
export default PetsList;
