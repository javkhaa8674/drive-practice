import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  //Switch,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import styles from "./modal.style";
import { icons, COLORS } from "../constants";
import { useRouter } from "expo-router";

const Modal = () => {
  const [isChecked, setChecked] = useState(false);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Дадлагажуулж сургах тухай гэрээ</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque id
            asperiores illo similique laudantium ipsum atque corrupti. Tempora
            vero at non, expedita illum voluptatem dicta quas provident nisi vel
            veniam doloribus consequatur iste a nulla vitae eligendi aliquid
            nam. Consectetur nostrum quisquam, debitis dolorem ex natus magni
            unde labore dolores nisi alias laboriosam ratione quas nobis amet,
            doloremque saepe omnis cumque atque eos mollitia quam! Repellendus,
            aperiam nemo necessitatibus quo ea minima mollitia dolorem tempore
            rem eum totam velit saepe nesciunt minus ad sunt quisquam unde.
            Ipsam neque exercitationem nemo necessitatibus magnam nam esse dicta
            suscipit odit sed blanditiis laborum, repudiandae soluta provident
            odio, minus sint? Possimus a eum, delectus aperiam reprehenderit
            quasi numquam distinctio vitae nobis, magnam, repellendus quos
            voluptatum? Neque non facilis aliquam necessitatibus repellat animi
            dolor id repudiandae officiis assumenda cum at tempore accusantium
            quisquam consequatur quo, quam est nihil rerum ipsum dolorum ad
            commodi. Veniam error rerum et inventore quaerat ab maiores, cum
            eaque tempora enim quos facere libero nihil! Beatae, iusto vitae
            officia voluptates qui itaque neque, aliquam doloremque ad
            voluptatibus consequatur quisquam eaque vel quas voluptatem quo
            sapiente temporibus id cumque rem molestias adipisci doloribus? Quas
            assumenda commodi reprehenderit, minus iure eos recusandae eum natus
            fugit autem. Repudiandae voluptate minus labore quod est, explicabo
            asperiores beatae id facilis, alias architecto impedit dolores
            perferendis! Sequi ipsam maxime magnam tempore, adipisci eum
            quibusdam dolore necessitatibus iusto exercitationem corrupti cumque
            in. Aperiam consequatur voluptatem esse rerum consectetur nihil
            itaque ducimus! Sequi voluptates vel, voluptas ab saepe quibusdam
            est quo minus? Sapiente ab nesciunt delectus, incidunt facilis
            laborum placeat ipsam atque, vitae voluptatem dolorem labore animi
            aperiam. Corrupti magnam, facere voluptates, aspernatur, eveniet
            omnis fuga tenetur nisi possimus natus obcaecati quisquam illum
            incidunt commodi quae! Doloremque impedit facere nesciunt illum
            eveniet numquam deserunt ea neque enim delectus commodi, quos
            doloribus omnis nemo eum cupiditate voluptatibus voluptates
            accusantium error eaque voluptatum odit accusamus. Impedit omnis quo
            labore minus distinctio magnam quod, eaque similique nesciunt
            quisquam repellendus corporis nihil tempora modi atque vel?
            Reprehenderit dignissimos animi alias error natus? Sint tempore
            exercitationem atque veritatis sed necessitatibus qui culpa
            blanditiis minima, ipsum quaerat neque quas hic quis modi eaque?
            Cupiditate deleniti impedit saepe enim suscipit adipisci voluptates
            est eaque corporis. Sit, quod aliquam maxime autem eum eius suscipit
            accusamus, molestias est ipsam modi itaque eligendi dolorem nisi
            ullam optio rerum quasi laboriosam voluptas non sed exercitationem
            soluta? Perferendis rerum eligendi corporis ex, recusandae,
            repudiandae quasi pariatur ipsum doloremque voluptates molestias
            animi quibusdam! Vel deserunt nihil laudantium libero ut voluptates
            fuga recusandae. Illo beatae adipisci reprehenderit repellendus ex
            odit ullam! Illo inventore, esse, error, repellat est perspiciatis
            corrupti deserunt nihil exercitationem possimus architecto ipsam
            laboriosam quae itaque! Qui atque, eum perspiciatis excepturi
            eveniet assumenda, itaque eius accusantium asperiores doloremque a
            cupiditate sequi vitae sit aspernatur nisi maxime incidunt
            voluptates nobis soluta similique! Tenetur magnam odit molestiae
            possimus harum ipsum, odio modi laboriosam repellendus consectetur
            quaerat? Debitis perspiciatis dolores cum numquam doloribus, nobis
            ducimus molestiae doloremque, similique, non deserunt! Animi nihil
            ad voluptas?
          </Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? COLORS.primary : undefined}
          />
          <Text style={styles.checkBoxText}>
            Би энэ гэрээг уншиж танилцлаа. Гэрээний бүх зүйлийг зөвшөөрч байна.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => router.replace("/login")}
            style={[styles.button, styles.buttonOutline]}
          >
            <Image
              source={icons.back}
              style={[styles.buttonImage, styles.buttonOutlineImage]}
            />
            <Text style={[styles.buttonText, styles.buttonOutlineText]}>
              Буцах
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={isChecked ? styles.button : [styles.button, styles.disabled]}
          >
            <Image source={icons.check} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Зөвшөөрөх</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Modal;
