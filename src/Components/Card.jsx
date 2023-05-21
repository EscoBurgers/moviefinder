import React from 'react'
import styled from 'styled-components'

function Card({title, date, vote, img, overview, styleTwo}) {

  return (
    <CardContainer>
      <CardStyle styleTwo={styleTwo}>
          { img ? 
        (<img src={`https://image.tmdb.org/t/p/w500${img}`} alt="" />)  :
        (<img
          src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
          alt="No Image"
        />)
        }

          <div>
            <h1>{title}</h1>
            <h2>{vote}</h2>
            <p>
            {overview ? (overview.length > 300 ? `${overview.substring(0, 300)}...` : overview) : (styleTwo ? "No description at the moment" : null)}
            </p>
            <h3>{date ? date : styleTwo ? "No Date" : null}</h3>
          </div>
      </CardStyle>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 150px;
`

const CardStyle = styled.div`
  ${({ styleTwo }) =>
    styleTwo
      ? `
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    border: 1px solid rgba(169, 39, 39, 0.3);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 10px;

    & img {
    width: 125px;
    border-radius: 10px 0 0 10px;
    object-fit: cover;
  }

  & h3 {
    font-size: 15px;
    color: #a8a3a3;
  }

  & div {
    text-align: left;
    padding-left: 10px;
  }

  `
      : `
    width: 250px;
    margin: 20px;
    background-color: #69a2e3;
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    & img {
    width: 250px;
    border-radius: 10px 10px 0 0;
  }
  `}
`;

export default Card