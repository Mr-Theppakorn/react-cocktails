import React from 'react';
import Cocktails from './Cocktails';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
    const { cocktails, loading } = useGlobalContext();
    console.log(cocktails);
    if (loading) {
        return <Loading />
    }
    if (cocktails.length < 1) {
        return (<h2 className="section-title">
            No cocktail matched your search criteria
        </h2>
        );
    }
    return (
        <section className="section">
            <h2 className="section-title">Cocktails</h2>
            <div className="cocktails-center">
                {cocktails.map((item) => {
                    return <Cocktails key={item.id} {...item} />
                })}
            </div>
        </section>
    )
}

export default CocktailList
