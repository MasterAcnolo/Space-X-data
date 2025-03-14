fetch("https://api.spacexdata.com/v4/launches/latest")
          .then(response => response.json())
          .then(data => {
              document.getElementById("launch-info").innerHTML = `
                  <h2>${data.name}</h2>
                  <p>Date: ${new Date(data.date_utc).toLocaleString()}</p>
                  <p>Détails: ${data.details || "Aucune information disponible"}</p>
                  <img src="${data.links.patch.small}" alt="Patch de mission">
              `;
          })
          .catch(error => console.error("Erreur :", error));


          