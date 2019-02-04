const presentationAgenda = friendList => {
  const agenda = friendList.reduce((acc, v, i) => {
    const { person, dest } = v;

    const dd = dest.filter((d, i) => {
      return friendList.every(f => f == v || !f.dest.includes(d));
    });

    if (dd.length > 0) {
      acc.push({
        person: person,
        dest: dd
      });
    }
    return acc;
  }, []);

  return agenda;
};

module.exports = presentationAgenda;
