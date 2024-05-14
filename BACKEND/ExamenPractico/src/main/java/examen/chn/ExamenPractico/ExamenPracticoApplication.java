package examen.chn.ExamenPractico;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableAsync
@EnableScheduling
@ComponentScan(basePackages = {"examen.chn.ExamenPractico"})
@EntityScan(basePackages = {"examen.chn.ExamenPractico"})
public class ExamenPracticoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExamenPracticoApplication.class, args);
	}

}
