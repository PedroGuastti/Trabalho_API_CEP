//cSpell:Ignore Cabecalho, secoes, secao
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

import ApartmentIcon from '@material-ui/icons/Apartment'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'


const Cabecalho = () => {
    const useStyles = makeStyles((theme) => ({
        toolbarTitulo: {
            flex: 1
        },
        toolbarLink:{
            paddingRight: theme.spacing(1)
        },
        toolbarSecundaria:{
            justifyContent: 'space-between'
        }
    }))

    const classes = useStyles()

    const secoes = [
        {titulo: 'Produtos', url: '/produtos'},
        {titulo: 'Serviços', url: '/servicos'},
        {titulo: 'SAC', url: '/sac'},
        {titulo: 'FAQ', url: '/faq'},
        {titulo: 'Área reservada', url: '/login'}
    ]

    return(
        <>
        <AppBar position="relative">
            <Toolbar>
                <ApartmentIcon />
                <Typography
                    component="h1"
                    align="center"
                    color="inherit"
                    className={classes.toolbarTitulo}
                    >Empresa Delta</Typography>
                
                <Button variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<LockOutlinedIcon/>}
                        href="/login">Login</Button>
            </Toolbar>
        </AppBar> 

        <Toolbar component="nav" className={classes.toolbarSecundaria}>
            {secoes.map((secao) => (
                <Link color="secondary" 
                key={secao.titulo} 
                className={classes.toolbarLink}
                href={secao.url}>{secao.titulo}</Link>
            ))}

        </Toolbar>



        </>
    )
}

export default Cabecalho