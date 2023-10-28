import './main.scss';


export default function GridItem({item}) {

  return (
    <div className="container__item" style={item.style}>

      
      <div className="container__item__frame container__item__frame--primary ">
      <div className="container__item__frame__image">
        <img src={item.picture} alt="" />
      </div>

      <div className="container__item__frame__content">
        <div className="container__item__frame__content--primary">
          {item.content1}
        </div>
        <div className="container__item__frame__content--secondary">
          {item.content2}
        </div>
      </div>
      </div>

      <div className="container__item__frame container__item__frame--secondary" >
          {item.footer}
      </div>

    </div>

  );
}
