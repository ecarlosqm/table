window.addEventListener('load', async () => {

    let result = await fetch("https://restcountries.eu/rest/v2/all");
    countries = [... await result.json()];

    document.getElementById('table-container').style.display = 'block';

    $('#table').DataTable({
        rowCallback: (row, data) => {
            const p = row.querySelectorAll('td');
            p.forEach(element => {
                if (element.innerText === data['flag']) {
                    const flagImage = document.createElement('img');
                    flagImage.setAttribute('src', data['flag']);
                    flagImage.classList.add('flag')
                    element.firstChild.remove();
                    element.appendChild(flagImage);
                }
            });
        },
        paging: true,
        responsive: true,
        scrollY: "50vh",
        data: countries,
        columns: [
            { data: 'name' },
            { data: 'flag' },
            { data: 'capital' },
            { data: 'topLevelDomain[, ]' },
            { data: 'alpha2Code' },
            { data: 'alpha3Code' },
            { data: 'callingCodes[, ]' },
            { data: 'altSpellings[, ]' },
            { data: 'region' },
            { data: 'subregion' },
            { data: 'population' },
            { data: 'latlng[, ]' },
            { data: 'demonym' },
            { data: 'area' },
            { data: 'gini' },
            { data: 'borders[, ]' },
            { data: 'nativeName' },
            { data: 'numericCode' },
            { data: 'currencies[,].name' },
            { data: 'languages[,].name' },
            { data: 'translations.es' },
            { data: 'regionalBlocs[, ].name' },
            { data: 'cioc' },
        ],
    });

});