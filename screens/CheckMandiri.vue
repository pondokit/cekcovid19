<template>
	<view class="container">
		<bg-common />

		<view class="card" :style="{height: screen.height - 150}">
				<image 
					class="title-img" 
					resize-mode="contain" 
					:source="require('../assets/images/img-title.png')" 
					:style="{height: screen.width - 300}"
				/>
				<animated:view class="question-wrapper" :style="{opacity: opc}">
					<tx fn aj cb>{{ current.question }}</tx>
				</animated:view>
				<view class="button-wrapper">
					<touchable-native-feedback 
						v-for="(n, i) in 2" 
						:on-press="() => fadeQuestion(true, (!i ? current.true : current.false))"
					>
						<view class="button-view">
							<tx fn ac cw>{{ !i ? 'YA' : 'TIDAK' }}</tx>
						</view>
					</touchable-native-feedback>
				</view>
		</view>
	</view>
</template>

<script>
import { Animated, Easing, Dimensions } from 'react-native';

import assessment from '../data/assessment';
import BgCommon from '../comps/BgCommon';

export default {
	props: ['navigation'],
	components: { BgCommon },
	data: () => ({
		current: {
			id: '', question: '', true: '', false: '' 
		},
		opc: 1,
	}),
	computed: {
		screen() {
			return Dimensions.get('window');
		}
	},
	methods: {
		async processResponse(res_id='1a') {
			const init_res_id = await this.navigation.getParam('res_id', false);

			if (init_res_id) res_id = init_res_id;

			if (res_id.includes('res_')) {
				this.current = {
					id: '', question: '', true: '', false: '' 
				};

				this.navigation.replace('ResultMandiri', {id: res_id});
			} else {
				this.current = assessment.filter(a => a.id == res_id)[0];
			}

		},
		fadeQuestion(again, res_id=null) {
			this.opc.setValue(again ? 1 : 0);

			Animated
				.timing(this.opc, {
					toValue: again ? 0 : 1,
					duration: 200,
					easing: Easing.linear
				})
				.start(() => {
					if (again) {
						this.processResponse(res_id);

						if (!res_id.includes('res_')) this.fadeQuestion(false);
					}
				});
		},
	},
	created() {
		this.processResponse();

		this.opc = new Animated.Value(1);
	}
}
</script>

<style>
.container {
	flex: 1;
	justify-content: center;
	align-items: center;
	padding-horizontal: 30;
}
.card {
	width: 100%;
	background-color: #FFF;
	elevation: 5;
	padding: 30;
	border-radius: 20;
	position: relative;
	top: -15;
	justify-content: space-between;
}
.title-img {
	width: 100%;
}
.question-wrapper {
	width: 100%;
}
.button-wrapper {
	width: 100%;
}
.button-view {
	background-color: #07BFC2;
	padding: 10;
	margin-top: 15;
	border-radius: 5;
}
</style>
