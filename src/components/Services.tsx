const services = [
	{
		image: '../../public/images/cardio.jpg',
		name: 'Cardio',
		href: '/#',
		description: 'En nuestro plan de cardio encontraras: sumba, ciclismo'
	}
]

export function Service() {
	return (
		<>
			{services.map((service) => {
				return (
					<article>
						<figure>
							<img src={service.image} alt="" />
						</figure>
						<h3>{service.name}</h3>
						<p>{service.description}</p>
						<a href={service.href}>Entrar</a>
					</article>
				)
			})}
		</>
	)
}
