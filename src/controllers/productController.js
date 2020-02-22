const controller = {};

// Se listan los productos 
controller.list = (req, res) =>{

    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM product', (err, products) =>{
            if(err){
                res.json(err);
            }

            console.log(products);
            res.render('products', {
                data: products
            });
        });
    });
};

//Se guarda un nuevo producto
controller.save = (req, res) =>{

    const data = req.body;
    req.getConnection((err, conn) =>{

        conn.query('INSERT INTO product set ?', [data], (err, product)=> {
            res.redirect('/');
        });
    })
}

//Busca un producto en especifico
controller.edit = (req, res) =>{
    const {id} = req.params;

    req.getConnection((err, conn) =>{

        conn.query('SELECT * FROM product WHERE id = ?', [id], (err, product) =>{
            res.render('product_edit', {
                data: product[0]
            });
        });
    });
};

//Actualiza el producto con nuevos datos
controller.update = (req, res) =>{
    const {id} = req.params;
    const newProduct = req.body;
    console.log(newProduct);

    req.getConnection((err, conn) =>{

        conn.query('UPDATE product set ? WHERE id = ?', [newProduct, id], (err, rows) =>{

            res.redirect('/');

        });

    })

};

//Elimina un producto
controller.delete = (req, res) =>{
    const {id} = req.params;

    req.getConnection((err, conn) =>{

        conn.query('DELETE FROM product WHERE id = ?', [id], (err, rows) =>{
            res.redirect('/');
        });
    })
};

module.exports = controller;