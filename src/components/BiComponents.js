import React from "react";

export default function BiComponent(props) {
  const { data, dataChange, currentDate } = props;
  if (!props.data) return <h3>yükleniyor..</h3>;
  return (
    <div>
      <p>{data.date}</p>
      <label htmlFor="apodDate">apodData:</label>
      <input
        type="date"
        name="birtday"
        value={currentDate}
        onChange={(e) => dataChange(e.target.value)}
      />
      <p>{data.explanation}</p>
      <p>{data.hdurl}</p>
      <p>{data.media_type}</p>
      <img src={data.hdurl} alt={data.title} width="500" height="600" />
      <p>{data.service_version}</p>
      <p>{data.title}</p>
      <p>{data.url}</p>
    </div>
  );
}
