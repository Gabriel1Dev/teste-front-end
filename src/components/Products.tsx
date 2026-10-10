import { useRef } from "react";
import dados from "../data/produtos.json";
import "../style/Products.scss";

const categorias = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
];

function Products() {
  const productsListRef = useRef<HTMLUListElement>(null);

  function scrollProducts(direction: "previous" | "next") {
    const list = productsListRef.current;
    if (!list) return;

    list.scrollBy({
      left: direction === "next" ? list.clientWidth : -list.clientWidth,
      behavior: "smooth",
    });
  }

  return (
    <section className="products" aria-labelledby="products-title">
      <h2 className="products__title" id="products-title">
        Produtos relacionados
      </h2>

      <nav className="products__categories" aria-label="Categorias de produtos">
        {categorias.map((categoria, index) => (
          <button
            key={categoria}
            className="products__category"
            type="button"
            aria-pressed={index === 0}
          >
            {categoria}
          </button>
        ))}
      </nav>

      <div className="products__carousel">
        <button
          className="products__arrow products__arrow--previous"
          type="button"
          aria-label="Produtos anteriores"
          onClick={() => scrollProducts("previous")}
        >
          ‹
        </button>

        <ul className="products__list" ref={productsListRef}>
          {dados.products.map((produto) => (
            <li key={produto.productName} className="products__item">
              <article className="products__card">
                <img
                  className="products__image"
                  src={produto.photo}
                  alt={produto.productName}
                />
                <p className="products__description">
                  {produto.descriptionShort}
                </p>
                <p className="products__price">
                  {produto.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p className="products__shipping">Frete grátis</p>
                <button className="products__buy" type="button">
                  COMPRAR
                </button>
              </article>
            </li>
          ))}
        </ul>

        <button
          className="products__arrow products__arrow--next"
          type="button"
          aria-label="Próximos produtos"
          onClick={() => scrollProducts("next")}
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Products;
