
  export const time = (dbTime) => {
    const t = new Date(dbTime);
    const time = t.toLocaleString("nl-BE", {
      timeZone: "UTC",
      dateStyle: "full",
    });
    return time;
  }

  