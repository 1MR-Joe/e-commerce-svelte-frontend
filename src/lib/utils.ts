export function fillEntitiesAsSelectorOptions(container: HTMLElement, entities: any[]): void {
    entities.forEach(e => {
        const optionElement = document.createElement('option');
        optionElement.textContent = e.name;
        optionElement.value = e.id;

        container.appendChild(optionElement);
    });
}

export async function fetchData(url: string|URL, format: string): Promise<any|null> {
    let response = await fetch(url);

    if(! response.ok) {
        console.error('error fetching data');
        return null;
    } else {
        let data;

        if(format === 'text') {
            data = await response.text();
        } else {
            data = await response.json();
        }

        console.log(data);
        return data;
    }
}

export function applyFiltersToURL(url: string, filters: { [key: string]: any }): string {
    let filteredURL = new URL(url);

    for(const [key, value] of Object.entries(filters)) {
        if(value) {
            filteredURL.searchParams.set(key, filters[key].toString());
        }
    }

    return filteredURL.toString();
}

export function centsToDollars(priceInCents: number): number {
    return(priceInCents / 100);
}

export function dollarsToCents(priceInDollars: number): number {
    return(priceInDollars * 100);
}