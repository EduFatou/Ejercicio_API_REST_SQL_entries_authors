const queries = {
    getEntriesByEmail: `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1
    ORDER BY e.title;`,
    //getAllEntries: `SELECT * FROM entries;`,
    createEntry: `INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,
    (SELECT id_author FROM authors WHERE email=$3),$4)`,
    updateEntry:`
    UPDATE entries
    SET 
        title=$1, 
        content=$2, 
        date=$3, 
        id_author=(SELECT id_author FROM authors WHERE email=$4), 
        category=$5
    WHERE 
        title=$6;`,
    //Modificar la query SQL para que me devuelva una respuesta
    //con los datos del autor y sin ID de la entry:
    getAllEntries: `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author`,
    deleteEntry:`DELETE FROM entries
    WHERE title = $1`
    // getEntriesByName:`
    // SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    // FROM entries AS e
    // INNER JOIN authors AS a
    // ON e.id_author=a.id_author
    // WHERE a.name = "Alejandru";`
}
module.exports = queries;