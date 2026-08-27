const textVariants = {
      default: 'text-xl',
      muted: 'text-xl text-(--text-secondary)',
      heading: 'text-2xl',
      blast: 'text-3xl',
    }

export function Text({ as: Component = "span", variant = 'default', className, children, ...props}) {
      return(
        <Component {...props} className={`${textVariants[variant]} ${className} ` }>
            {children}
        </Component>
      )
    }